import { Dexie, type EntityTable } from 'dexie';
import type { Task } from '../types/task';

const db = new Dexie('TaskDatabase') as Dexie & {
    tasks: EntityTable<Task, 'id'>
};

db.version(1).stores({
    tasks: '++id, title, category, completed'
});

export type { Task };
export { db };
