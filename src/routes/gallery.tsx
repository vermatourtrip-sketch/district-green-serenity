import { createFileRoute } from "@tanstack/react-router";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { makeHead } from "@/lib/site";
export const Route=createFileRoute("/gallery")({head:()=>makeHead("Gallery | The District Green Kalpa","Explore rooms, mountain views and the warm village setting of The District Green homestay in Kalpa.","/gallery"),component:Gallery});
function Gallery(){return <><section className="px-5 pb-16 pt-36 lg:px-10 lg:pt-44"><div className="mx-auto max-w-7xl"><p className="eyebrow text-primary">A closer look</p><div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h1 className="page-title">Gallery</h1><p className="max-w-md editorial-copy">Rooms, quiet corners and the mountain landscape—seen as they are at The District Green.</p></div></div></section><section className="px-3 pb-24 lg:px-6 lg:pb-32"><div className="mx-auto max-w-[92rem]"><GalleryLightbox/></div></section></>}
