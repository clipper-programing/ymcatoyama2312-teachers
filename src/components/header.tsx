import Timeline from "@/components/timeline"
import Weather from '@/components/weather'


export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/codey-icon.png" className="h-14 p-1" />
            <span className="ml-3 text-xl">Cody Travel</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">新しい旅を計画</a>
            <a className="mr-5 hover:text-gray-900">次の旅の予定</a>
            <a className="mr-5 hover:text-gray-900">お問い合わせ</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            ログアウト
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>

      <div className="w-full header-background h-60">

        <div className="container mx-auto">
          <div className="pt-5">
            <div className="bg-white rounded-lg p-5 pb-8">

              <h1 className="text-2xl text-black text-left pt-5 font-bold">南アフリカへの旅行</h1>
              <p>2024年3月21日〜2024年3月24日</p>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap w-full'>
          <Timeline />
          <Weather />
        </div>

      </div>
    </>
  )
}