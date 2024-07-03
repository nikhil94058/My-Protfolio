import { certificates } from '../../../data/certificates'

export default function handler(req, res) {
  res.status(200).json(certificates);
}
