# NextJS app

An app to create community amongst streetcrafters

## Getting Started

First, run the development server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
```

## All personal data removed but the schema is as follows (is a .json file)

```
[
  {
    "id": "c1",
    "mobile": "0234567890",
		"title": "Tittl",
		"slug": "slugname",
		"profilePic": "title.jpg",
    "landingPic": "shweshwe.jpg",
		"images": [
      "imagename_01.jpg",
			"imagename_02.jpg",
			"imagename_03.jpg",
			"imagename_04.jpg",
			"imagename_05.jpg",
			"imagename_06.jpg",
			"imagename_07.jpg",
			"imagename_08.jpg",
			"imagename_09.jpg"
		],
    "productImage": "image02.jpg",
		"category": "type_work",
		"description": "Blah blah blah",
		"location": "The Park",
		"locationLong": "The Park",
		"date": "2022-05-12",
		"isFeatured": "false",
		"coordinates": ["27.997584342956543", "-26.160358906905973"]
	},
  ```

### The build uses NextJs 13 and generateStaticParams


```

Route (app)                                Size     First Load JS
┌ ○ /                                      2.54 kB        90.1 kB
├ ○ /crafters                              141 B          77.3 kB
├ ● /crafters/[slug]                       185 B          87.7 kB
├   ├ /crafters/shweshwe
├   ├ /crafters/vincent
├   ├ /crafters/lovemore
├   └ [+6 more paths]
├ λ /crafts/[category]                     1.49 kB          89 kB
└ ○ /favicon.ico                           0 B                0 B
+ First Load JS shared by all              77.2 kB
  ├ chunks/2443530c-cac3e7a072d599d8.js    50.5 kB
  ├ chunks/488-7ed03ee1a917f9f8.js         24.7 kB
  ├ chunks/main-app-7729643153f9c574.js    215 B
  └ chunks/webpack-029f594f4819ee03.js     1.68 kB

Route (pages)                              Size     First Load JS
─ ○ /404                                   181 B          74.8 kB
+ First Load JS shared by all              74.6 kB
  ├ chunks/framework-8883d1e9be70c3da.js   45.1 kB
  ├ chunks/main-99e018c92e4ec135.js        27.6 kB
  ├ chunks/pages/_app-b555d5e1eab47959.js  195 B
  └ chunks/webpack-029f594f4819ee03.js     1.68 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)
●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
```

