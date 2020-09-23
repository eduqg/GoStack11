import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';

//  Decorators
// A classe é como um parametro que estou passando para o meu Entity
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User;

  // Coluna no banco de dados
  @Column()
  user_id: string;

  // Não é convertido em uma coluna no banco de dados
  // Join column -> Qual coluna nessa tabela faz o relacionamento
  // eager = traz usuários de appointments  @ManyToOne(() => User, { eager: true })
  // lazy = permite buscar relacionamento com await appointment.user
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('time with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export default Appointment;
