# Мақтаарал — қызметтер порталы (bagalau-hub)

Барлық электронды нысандарға (4 сайт) бір жерден кіру үшін парольмен
қорғалған кіру беті. Ешбір нысанның деректерін бұл сайт сақтамайды — тек
сілтемелер тізімі.

## Қалай жұмыс істейді

- `middleware.ts` — барлық сұранысты HTTP Basic Auth арқылы тексереді
  (тек **HUB_PASS** ортаның айнымалысында сақталған пароль тексеріледі,
  логин кез келген болуы мүмкін).
- `app/page.tsx` — парольден өткен соң көрсетілетін 4 батырмалы мәзір.

## Жергілікті іске қосу

```bash
npm install
npm run dev
```

Жергілікті тексеру үшін `.env.local` файлын жасап, мына жолды қосыңыз:

```
HUB_PASS=сіздің-пароліңіз
```

## GitHub Desktop + Vercel арқылы жариялау

1. GitHub Desktop → **File → Add Local Repository** → осы қалтаны таңдаңыз
   (қажет болса, алдымен «create a repository» сілтемесін басыңыз).
2. **Publish repository**.
3. [vercel.com](https://vercel.com) → **Add New → Project** → осы
   репозиторийді импорттаңыз (Next.js автоматты анықталады).
4. **Маңызды:** Vercel жобасының **Settings → Environment Variables**
   бөлімінде `HUB_PASS` айнымалысын пароль мәнімен қосыңыз (барлық
   Environment — Production/Preview/Development), содан кейін **Redeploy**
   жасаңыз — әйтпесе middleware сайтты әрқашан жабық ұстайды.
5. **Settings → Domains** бөлімінде `bagalau.jumis-maktaaral.kz` қосып,
   Vercel берген CNAME жазбасын Gohost.kz DNS аймағына қосыңыз.

