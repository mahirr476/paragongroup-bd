import Link from "next/link";

type Props = {
  title: string;
  shortDes: string;
  slug: string;
  bannerImage: string;
};

export default function BusinessCard({ title, shortDes, slug, bannerImage }: Props) {
  return (
    <Link href={`/businesses/${slug}`} className="group block overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="relative h-52 overflow-hidden">
        <img src={bannerImage} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-navy group-hover:text-orange transition-colors text-base mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{shortDes}</p>
        <span className="inline-block mt-3 text-xs font-semibold text-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">Learn more →</span>
      </div>
    </Link>
  );
}
