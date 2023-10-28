import { PipelineStage } from 'mongoose';
import Repository from '../../../../shared/repository/repository/repositiory';
import Artist from '../../Artist';
import { Service } from '../../../../shared/interfaces/Service';

export default class ListArtistService implements Service<Artist[]> {
  private repository: Repository<Artist>;

  constructor(repository: Repository<Artist>) {
    this.repository = repository;
  }

  public async execute(
    pipeline: PipelineStage[],
    page: number = 0,
    pageSize: number = 10,
  ): Promise<Artist[]> {
    const foundedArtists = await this.repository.aggregate(
      pipeline,
      page,
      pageSize,
    ) as Artist[];

    return foundedArtists;
  }
}

