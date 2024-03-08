enum QuestionStatus {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted',
}

async function getFags(req: {
  topicId: number;
  status: QuestionStatus;
}): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: QuestionStatus;
  }[]
> {
  const res = await fetch('/fags', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}
