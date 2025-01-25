import React from 'react';
import Image from 'next/image';
import { CiShoppingCart } from 'react-icons/ci';
import Link from 'next/link';

// Sample product data
const products = [
  { src: '/assets/Image.png', name: 'Library stool chair', price: '$20' },
  { src: '/assets/image copy.png', name: 'Library stool chair', price: '$20' },
  { src: '/assets/Image3.png', name: 'Library stool chair', price: '$20' },
  { src: '/assets/Image4.png', name: 'Library stool chair', price: '$20' },
  { src: '/assets/Image.png', name: 'Library stool chair', price: '$20' },
  { src: '/assets/image copy.png', name: 'Library stool chair', price: '$20' },
  { src: '/assets/Image3.png', name: 'Library stool chair', price: '$20' },
  { src: '/assets/Image4.png', name: 'Library stool chair', price: '$20' },
  { src: '/assets/Image.png', name: 'Library stool chair', price: '$20' },
  { src: '/assets/image copy.png', name: 'Library stool chair', price: '$20' },
  { src: '/assets/Image3.png', name: 'Library stool chair', price: '$20' },
  { src: '/assets/Image4.png', name: 'Library stool chair', price: '$20' },
];

// ProductList Component
const ProductList = ({ products }: { products: any[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
    {products.map((product, index) => (
      <div
        key={index}
        className="w-full bg-white shadow-md rounded-[6px] hover:shadow-lg transition-shadow"
      >
        <Link href="/" className="block">
          <Image
            src={product.src}
            alt={product.name}
            width={312}
            height={312}
            className="rounded-t-[6px] w-full h-auto object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-black">{product.name}</p>
              <div
                className={`${
                  index === 0 ? 'bg-[#029FAE]' : 'bg-[#F0F2F3]'
                } flex justify-center items-center rounded-[6px] w-[44px] h-[44px]`}
              >
                <CiShoppingCart className="text-black w-[18.5px] h-[18.5px]" />
              </div>
            </div>
            <p className="font-bold text-black mt-2">{product.price}</p>
          </div>
        </Link>
      </div>
    ))}
  </div>
);

// Page Component
const Page = () => (
  <div className="max-w-screen-xl mx-auto py-8">
    <h1 className="text-2xl font-bold text-center mb-8">All Products</h1>
    <ProductList products={products} />
  </div>
);

export default Page;
