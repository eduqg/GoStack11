import React, { useState, useEffect } from 'react';

import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Container, RepositoryInfo, Header, Issues } from './styles';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  id: number;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      // Promise.all -> Executa requisições ao mesmo tempo
      // Promise.race -> Pegar o resultado da primeira que voltar
      const [newRepository, newIssues] = await Promise.all([
        api
          .get<Repository>(`repos/${params.repository}`)
          .then(response => response.data),
        api
          .get<Issue[]>(`repos/${params.repository}/issues`)
          .then(response => response.data),
      ]);

      setRepository(newRepository);
      setIssues(newIssues);
    }

    loadData();
  }, [params.repository]);

  return (
    <Container>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description} </p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title} </strong>
              <p>{issue.user.login} </p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </Container>
  );
};

export default Repository;
