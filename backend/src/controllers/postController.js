import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getPosts = async (_, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
};

export const createPost = async (req, res) => {
  const { name, description } = req.body;
  const post = await prisma.post.create({ data: { name, description } });
  res.status(201).json(post);
};

export const deletePost = async (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = await prisma.post.delete({ where: { id } });
  res.json(deleted);
};