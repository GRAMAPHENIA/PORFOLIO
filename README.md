# Uno

```
npx create-next-app@latest .
```

# Dos

```
npm i @react-email/components @react-email/tailwind clsx framer-motion next-themes react-hot-toast react-icons react-intersection-observer react-vertical-timeline-component resend
```

# Tres

```
npm install @types/react-vertical-timeline-component --save-dev
```

se crea la 📂 actions

se crea la 📂 components. Dentro de ella la 📂 sections

se crea la 📂 context

se crea la 📂 email

se crea la 📂 lib

dentro de la 📂 sections creamos el 📄 `Footer.tsx`

en el 📄 `layout.tsx` importamos _Footer_

dentro de la 📂 _components_ creamos `SectionHeading.tsx` dentro Snippet `rfc`
dentro de la 📂 _sections_ creamos `About.tsx` Snippet _rfc_ "use client"

dentro de la 📂 _lib_ creamos hooks.ts

dentro de la 📂 _page_ importamos `<About/>`
dentro de el 📄 about importamos `import { useSectionInView } from '@/lib/hooks'`

dentro de la 📂 _context_ creamos el 📄 `active-section-context.tsx` dentro utilizamos el snippet `rfc`

dentro de la 📂 libs creamos el 📄 `types.ts`

dentro de la 📂 libs creamos el 📄 `data.ts`

dentro de la 📂 _app_ creamos el 📄 `providers.tsx`

dentro de la 📂 _sections_ creamos `intro.tsx` usamos el snippet _rfc_ habitual.
lo importamos dentor de `page.tsx` arriba de `<About/>`

Dentro de la 📂 _Components_ creamos el 📄 `SectionDivider.tsx` y lo importamos en `page.tsx` debajo de `<Intro/>` y debajo de `<About/>`

Dentro de la 📂 _sections_ creamos el 📄 `Experience.tsx` y colocamos el componente devajo del ultimo `<SectionDivider/>` en `page.tsx`

Dentro de la 📂 _sections_ creamos el 📄 `Project.tsx` y `Projects.tsx`

Dentro de la 📂 _sections_ creamos el 📄 `Skills.tsx`  
Dentro de la 📂 _components_ creamos el 📄 `LanguagesLevel.tsx`

Dentro de la 📂 _sections_ creamos el 📄 `Languages.tsx`

Dentro de la 📂 _sections_ creamos el 📄 `Header.tsx` y lo importamos en el 📄 `layout.tsx` arriba de `<children/>`

Dentro de la 📂 _sections_ creamos el 📄 `Contact.tsx`

Dentro de la 📂 _email_ creamos el 📄 `contact-form-email.tsx`

Dentro de la 📂 _actions_ creamos el 📄 `sendEmail.ts`

Dentro de la 📂 _lib_ creamos el 📄 `utils.ts`

Dentro de la 📂 raiz del proyecto creamos el 📄 `.env`

Recurso para `RESEND_API_KEY` dentro del 📄 `.env` en el sitio `https://resend.com/`

Dentro de next config agregamos una nueva configuracion de _experimental_ (serverActions)

Dentro de la 📂 _components_ creamos el 📄 `SubmitBtn.tsx` (esto es solamente decorativo a gusto. En este caso lo dejo vacio)

Dentro de la 📂 _components_ creamos el 📄 `BgDecorator.tsx`

Dentro de la 📂 _components_ creamos el 📄 `ThemeSwitch.tsx`

Dentro de `tailwind.config.ts` importar el _darkmode_
