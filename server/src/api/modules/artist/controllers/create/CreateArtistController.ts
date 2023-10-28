import { FastifyReply, FastifyRequest } from 'fastify';
import CreateArtistService from '../../../../../domain/modules/Artist/services/create/CreateArtistService';
import Artist from '../../../../../domain/modules/Artist/Artist';

export default class CreateArtistController {
  private service: CreateArtistService;

  constructor(service: CreateArtistService) {
    this.service = service;
  }

  public async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    const Artist = request.body as Artist;
    const createdArtist = await this.service.execute(Artist);

    if (createdArtist) {
      return reply.code(202).send(createdArtist);
    }

    return reply.badRequest('Invalid _id!');
  }
}

