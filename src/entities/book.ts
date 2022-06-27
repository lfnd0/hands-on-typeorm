import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid"

import { Genre } from "./genre";

@Entity("books")
export class Book {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string

  @Column()
  pages: number

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @Column()
  genre_id: string

  @ManyToOne(() => Genre)
  @JoinColumn({ name: "genre_id" })
  genre: Genre;

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
