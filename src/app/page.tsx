import Image from 'next/image'
import styles from './page.module.css'
import { prisma } from '@/db/conn';

async function getData() {
  return await prisma.championshipReign.findFirst({
    take: 10,
    include: {
      Championship: true,
      Wrestler: true
    },
    where: {
      current: 1
    }
  });
}

async function Home() {

  const datas = await getData();
  console.log({ datas, w: datas?.Wrestler, chp: datas?.Championship });


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p className='dreadnotus white' style={{ color: '#fff' }}>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

    </main>
  )
}

export default Home;