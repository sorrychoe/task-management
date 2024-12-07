import { LowSync } from 'lowdb';
import { JSONFileSync } from 'lowdb/node';


interface DbData {
  users: any[];
  tasks: any[];
  projects: any[];
}

const file = 'db.json';

const adapter = new JSONFileSync<DbData>(file);
const defaultData: DbData = { users: [], tasks: [], projects: [] };

const db = new LowSync<DbData>(adapter, defaultData);
db.read();

export default db;
