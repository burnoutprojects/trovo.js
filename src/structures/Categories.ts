import HttpClient from './HttpClient';
import { ICategories, ISearchCategories } from '../types/TCategories';
import { ApiError, CategoryError } from './Errors';

export default class Categories extends HttpClient {
  public async getGameCategories() {
    try {
      const { data }: { data: ICategories } = await this.http.get('/categorys/to');

      return data;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
    } catch (err: AxiosError) {
      console.log(Object.keys(code))
      // if(err.code === 'ERR_BAD_REQUEST') throw new ApiError()
    }
  }

  public async searchCategories(query: string, limit: number = 20): Promise<ISearchCategories | undefined> {
    if (limit > 100) limit = 100;
    try {
      const { data }: { data: ISearchCategories } = await this.http.post('/searchcategory', { query, limit });

      return data;
    } catch (error) {}
  }
}
