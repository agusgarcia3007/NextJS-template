import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
        <CardFooter>Give a star on Github</CardFooter>
      </Card>
    </main>
  );
}
