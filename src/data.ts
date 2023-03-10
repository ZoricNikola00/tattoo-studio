import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
import { GrFacebookOption } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';


export const navData =[ 
    {id:0, name: 'Home' ,offset:-80},
    {id:1, name: 'About' ,offset:-150},
    {id:2, name: 'Gallery' ,offset:-150},
    {id:3, name: 'Testimonial' ,offset:-200},
    {id:4, name: 'Interview' ,offset:-100},
    {id:5, name: 'Contact' ,offset:-150},
  ]

export const socialData = [
  {id:0, href: '/', icon: GrFacebookOption },
  {id:1, href: '/', icon: IoLogoInstagram },
  {id:2, href: '/', icon: IoLogoPinterest },
  {id:3, href: '/', icon: IoLogoTwitter },
  {id:4, href: '/', icon: IoLogoYoutube },
];

export const galleryData =[
    {
      id:0,
      src: GalleryImg1,
    },
    {
      id:1,
      src: GalleryImg2,
    },
    {
      id:2,
      src: GalleryImg3,
    },
    {
      id:3,
      src: GalleryImg4,
    },
    {
      id:4,
      src: GalleryImg5,
    },
    {
      id:5,
      src: GalleryImg6,
    },
    {
      id:6,
      src: GalleryImg7,
    },
    {
      id:7,
      src: GalleryImg8,
    },
  ]


export const testimonialData = [
  {
    id:0,
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    id:1,
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
  {
    id:2,
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Jurgen Klopp',
    occupation: 'Tattoo Artist',
  },
];

export const contactData = [
    {
      id:0,
      title: 'LA office',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: FaMapMarkerAlt,
        name: '784 Norman Street, Los Angeles',
      },
      phone: {
        icon: FaPhoneAlt,
        number: '+49 93 30493943',
      },
      email: {
        icon: FaEnvelope,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
    {
      id:1,
      title: 'NYC office',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: FaMapMarkerAlt,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: FaPhoneAlt,
        number: '+49 34 36573355',
      },
      email: {
        icon: FaEnvelope,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
  ];

export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: FaMapMarkerAlt,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: FaPhoneAlt,
      number: '+49 34 36573355',
    },
    email: {
      icon: FaEnvelope,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      {id:0, href: '/', name: 'About me', },
      {id:1, href: '/', name: 'My gallery' },
      {id:2, href: '/', name: 'My services' },
      {id:3, href: '/', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      {id:0, name: 'Mon - Tue / Appointment' },
      {id:1, name: 'Wed - Fri / 10:00 - 9:00pm' },
      {id:2, name: 'Sat / 10:00 - 6:00pm' },
      {id:3, name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: FiSend,
    },
  },
};
