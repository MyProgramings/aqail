'use client'

import Image, { type StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

import image6 from '@/images/photos/image-6.jpg'
import file from '@/images/photos/file.png'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image5 from '@/images/photos/image-5.jpg'
import img1 from '@/images/photos/1.webp'
import img2 from '@/images/photos/2.webp'
import img3 from '@/images/photos/3.webp'
import img4 from '@/images/photos/4.webp'
import img5 from '@/images/photos/5.webp'
import img6 from '@/images/photos/6.webp'
import img7 from '@/images/photos/7.webp'
import img9 from '@/images/photos/9.webp'
import img10 from '@/images/photos/10.webp'
import img11 from '@/images/photos/11.webp'
import img12 from '@/images/photos/12.webp'

type Photo = {
  src: StaticImageData
  title: string
  description: string
}

const photos: Photo[] = [
  {
    src: image1,
    title: 'تصميم إبداعي',
    description: 'لقطة من أحد المشاريع والتجارب البصرية التي أعمل عليها.',
  },
  {
    src: image2,
    title: 'تجربة مستخدم',
    description: 'تفاصيل بصرية مستوحاة من العمل على تجارب رقمية سهلة وواضحة.',
  },
  {
    src: image6,
    title: 'هوية بصرية',
    description: 'استكشاف للألوان والتكوينات المستخدمة في بناء هوية متناسقة.',
  },
  {
    src: file,
    title: 'واجهة رقمية',
    description: 'نموذج بصري من واجهات وتجارب رقمية قيد التطوير.',
  },
  {
    src: image5,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
  {
    src: img1,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
  {
    src: img2,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
  {
    src: img3,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
  {
    src: img4,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
  {
    src: img5,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
  {
    src: img6,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
  {
    src: img7,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
  {
    src: img9,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
  {
    src: img10,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
  {
    src: img11,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
  {
    src: img12,
    title: 'تفاصيل من العمل',
    description: 'لحظة من مراحل التصميم وصناعة التفاصيل الصغيرة.',
  },
]

export function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  useEffect(() => {
    if (!selectedPhoto) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setSelectedPhoto(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedPhoto])

  return (
    <>
      <div
        dir="ltr"
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden px-4 py-4 touch-pan-x sm:justify-center sm:gap-8 sm:px-0"
      >
        {photos.map((photo, photoIndex) => (
          <button
            key={photo.src.src}
            type="button"
            onClick={() => setSelectedPhoto(photo)}
            aria-label={`عرض تفاصيل ${photo.title}`}
            className={clsx(
              'relative h-[184px] w-[368px] flex-none snap-center overflow-hidden rounded-xl bg-zinc-100 text-left shadow-sm transition hover:scale-[1.02] focus:ring-2 focus:ring-teal-500 focus:outline-hidden sm:rounded-2xl dark:bg-zinc-800',
              rotations[photoIndex % rotations.length],
            )}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="photo-dialog-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:grid-cols-[minmax(0,1.25fr)_minmax(16rem,0.75fr)] dark:bg-zinc-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] min-h-64 bg-zinc-100 sm:aspect-auto sm:min-h-[28rem] dark:bg-zinc-950">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-contain"
              />
            </div>
            <div dir="rtl" className="flex flex-col p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                aria-label="إغلاق تفاصيل الصورة"
                className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl leading-none text-zinc-700 shadow-sm transition hover:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden dark:bg-zinc-800/90 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                <span aria-hidden="true">×</span>
              </button>
              <p className="text-sm font-medium text-teal-600 dark:text-teal-400">من معرض الأعمال</p>
              <h2 id="photo-dialog-title" className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                {selectedPhoto.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
