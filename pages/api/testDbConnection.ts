import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const uri = process.env.MDATABASE_URL; // Remplacez par votre variable d'environnement contenant la chaîne de connexion
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    res.status(200).send('Connexion à la base de données réussie');
  } catch (error) {
    console.error('Échec de la connexion à la base de données', error);
    res.status(500).send('Échec de la connexion à la base de données');
  } finally {
    await client.close();
  }
}