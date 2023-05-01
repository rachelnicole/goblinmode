import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex-row place-items-center">
        <Image
          className="relative"
          src="/goblinmodelogo.gif"
          alt="goblin mode logo"
          width={500}
          height={100}
          priority
        />
      </div>

      <div className="relative flex-row align-top">
      <Image
          className="relative"
          src="/comingup.jpeg"
          alt="goblin time image"
          priority
          height={800}
          width={800}
        />
      </div>
    </main>
  )
}
