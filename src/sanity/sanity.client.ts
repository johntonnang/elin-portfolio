import { createClient, type ClientConfig } from 'next-sanity';
import {
  studioApiVersion,
  studioDataset,
  studioProjectId,
} from '../../environment';

const config: ClientConfig = {
  projectId: studioProjectId,
  dataset: studioDataset,
  apiVersion: studioApiVersion,
  useCdn: false,
};

export const client = createClient(config);
