import { useRouter } from 'next/router';
import Carousel from '../components/Carousel';

export default function DetailsPage() {
  const router = useRouter();
  const { params } = router.query;

  if (!params) return null;

  return <div>{params[0] && <p>{`${params[1]}`}</p>}</div>;

  // return <Carousel photos={photos} />;
}
