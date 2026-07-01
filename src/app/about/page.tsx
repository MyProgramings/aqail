import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="mr-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'أنا عبدالله باعقيل. أعيش في مدينة المكلا حيث أصمم المستقبل.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pr-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            أنا عبدالله باعقيل. أعيش في مدينة المكلا حيث أصمم المستقبل.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              لقد أحببت صنع الأشياء منذ أن كنت صغيراً،
              وكتبت أول برنامج لي عندما كنت في السادسة من عمري،
              بعد أسبوعين فقط من إحضار والدتي لجهاز ماكنتوش 
              LC 550 الجديد كلياً الذي علمت نفسي الكتابة عليه.
            </p>
            <p>
              الشيء الوحيد الذي أحببته أكثر من أجهزة الكمبيوتر في
              طفولتي كان الفضاء. عندما كنت في الثامنة من عمري، تسلقت
              شجرة البلوط التي يبلغ ارتفاعها 40 قدمًا في الجزء الخلفي
              من فناء منزلنا وأنا أرتدي خوذة دراجة نارية لأختي الكبرى،
              وعدت تنازليًا من ثلاثة، ثم قفزت - على أمل أن تكون الشجرة 
              طويلة بما يكفي لأتمكن، بقليل من الزخم، من الوصول إلى المدار.
            </p>
            <p>
              قضيتُ الصيفيات القليلة التالية في المنزل أعمل على تصميم صاروخ،
              بينما كنت أتعافى من العمليات الجراحية المتعددة التي خضعت لها لإصلاح
              ساقيّ المكسورتين بشدة. استغرق الأمر تسع محاولات، ولكن عندما بلغتُ الخامسة عشرة من عمري،
              أرسلتُ هاتف والدي من نوع بلاك بيري إلى المدار، وتمكنتُ من إرسال
              صورة من الفضاء إلى جهاز الكمبيوتر العائلي.
            </p>
            <p>
              أنا اليوم مؤسس شركة بلانيتاريا، حيث نعمل على
              بدلات فضاء مدنية ومجموعات مكوك فضائي مأهولة يمكنك تجميعها في
              المنزل حتى يتمكن الجيل القادم من الأطفال من الوصول إلى المدار - من راحة حدائقهم الخلفية.
            </p>
          </div>
        </div>
        <div className="lg:pr-20">
          <ul role="list">
            <SocialLink href="#" icon={XIcon}>
              تابعنا على إكس
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              تابعنا على إنستغرام
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              تابعنا على GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              تابعنا على لينكدإن
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
