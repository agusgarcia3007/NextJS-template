import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { socialData } from '@/lib/social-data';
import { Github } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const stack = [
    'Next.js',
    'Typescript',
    'TailwindCSS',
    'Shadcn UI',
    'Prettier',
    'ESLint',
  ];

  return (
    <main className='grid h-lvh w-screen place-items-center bg-gradient-to-br from-amber-100 via-lime-100 to-emerald-100'>
      <Card>
        <CardHeader>
          <CardTitle>Welcome to the template</CardTitle>
          <CardDescription>Made with love and:</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className='list-inside list-disc'>
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className='gap-x-2'>
          Give a star on Github
          <Button size='icon' variant='ghost' asChild>
            <Link href={socialData.githubLink}>
              <Github />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
