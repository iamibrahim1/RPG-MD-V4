let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} neon helo
   *List Efek:*
3d-effect
3d-rubystone
3d-text-sub-zombie
3dengraved
3dgolden
3dgradient
3dlove
3dluxury
3dneonlight
3dpapercut
3drainbow
3drealistic
3dscifi
3dtext-effect
3dunderwater
3dwaterpipe
1917-style
alice-league-of-kings
angel-wing-galaxy
anubis
arch-crossfire
art-shader
 assassins-creed
azzenka-league-of-kings
bearlogo
bg-crossfire
birthday-cake
birthday-cards
birthday-greeting
birthday-roses
black-metal
blackpink
blood-frosted
blood-text
blue-effect
blue-glitter
brickwall
brokentext
bubble-effect
bulb-effect
circuit
color-fireworks
cool-metal
dark-gold-metal
decorated-cookie
deluxe-gold
deluxe-silver
dinamo
double-exposure
dragon-fire
eroded-metal
fabric-text
firework
fox-crossfire
fun-certify1
fun-certify2
futuristic
galaxy-angel
galaxy-effect
galaxy-effect2
galaxy-text
galaxy-text-3
gankk-league-of-kings
gemstone
genji-overwatch
glossy
glossy-bluemetal
glossy-carbon
glossy-chrome
gold-avenger
gold-barcar
gold-batman
gold-bird2
gold-eagle
gold-effect
gold-fox
gold-glitter
gold-lion
gold-lion2
gold-star
gold-tiger
golden-letter
gr-crossfire
graffiti-color
graffiti-text3
graffiti-text4
graffiti-text5
graffiti-text8
graffititext
green-brush
greenhorror
halloween-fire
hanzo-overwatch
heart-birthday
heart-cups
heart-flashlight
hero3-crossfire
holographic
ledtext
lend-text
light-text
logo-galaxy
lol-ahri
lol-caitlyn
lol-draven
lol-ezreal-and-shen
lol-fiora
lol-fizz
lol-garen
lol-graves
lol-jhin
lol-jinx
lol-kalista
lol-khazix
lol-kogmaw
lol-leesin
lol-lux
lol-master-yi
lol-miss-fortune
lol-nidalee
lol-quinn
lol-rengar
lol-riven
lol-sona
lol-talon
lol-thresh
lol-vayne
lol-wukong
lol-yasuo
lol-zed
machines-effect
magic-text
magmatext
matrix-text
mei-overwatch
mercy-overwatch
metal-avenger
metal-headshot
metal-lion-2
metal-real-madrid
metal-star
metal-superman
metal-text-effect
metal-wolf-2
metalic
metallic-letter
mganga-league-of-kings
miniontext
modern-gold-3
modern-gold-4
modern-gold-5-pro
modern-gold-green
modern-gold-purple
modern-gold-red
modern-gold-sliver
modern-goldred
name-on-hot-air-ballon
neon
neon-2
neon-brightblue
neon-effects
neon-light-galaxy
neon-satin
neondevil
neonlight
neontext-light
paper-cut
paperart
rainbow-effect
reaper-overwatch
red-birthdaycake
redhot-metal
resht-league-of-kings
science
sfg-crossfire
skeleton
sketch
snowtext
soldier-overwatch
status-life
status-life-1
status-life-2
status-love
status-mood
status-mood-1
status-mood-2
status-mood-3
sunlight-shadow
swat-crossfire
tattoo-dragon
text-birthdaycake
text-birthdaycake2
thundertext
torbjornplate-overwatch
transformer
typography-autumn
typography-leaves
typography-maker1
violet-league-of-kings
water-3d
water-effect
watercolor
wedding-silver
wetglass
wings-effect
wishes-birthdaycake
word-greenfireworks
word-leaves`)

  let thm = args[0]
  let text1 = args.slice(1).join(' ')
let images = `https://violetics.pw/api/textpro/${thm}?apikey=${global.violetics}&text=${text1}`
        let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.help = ['textprox']
handler.tags = ['maker']
handler.command = /^(textprox|textpromex)$/i

export default handler