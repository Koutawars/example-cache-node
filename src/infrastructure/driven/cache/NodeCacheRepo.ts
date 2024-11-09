import NodeCache from "node-cache";
import { CacheRepository } from "./CacheRepository";

export class NodeCacheRepo implements CacheRepository {
  cache: NodeCache;
  constructor(){
    this.cache = new NodeCache();
  }
  async set(key: string, value: string): Promise<void> {
    this.cache.set(key, value);
  }
  async get(key: string): Promise<string | null> {
    return this.cache.get(key) as string;
  }
  async del(key: string): Promise<void> {
    this.cache.del(key);
  }
}