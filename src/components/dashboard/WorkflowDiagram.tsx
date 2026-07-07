import { motion } from 'framer-motion'
import { EASE, viewportOnce } from '@/utils/motion'
import { CategoryIcon } from '@/assets/icons'

/**
 * n8n-style automation graph on a pure-black canvas. Connector lines *draw out*
 * to reach each next node in sequence (pathLength), then a bright pulse loops
 * along them like live data. All-SVG (viewBox) so nodes + lines scale together;
 * nodes use foreignObject so they can be styled with normal HTML/Tailwind and
 * show real product logos.
 */

const IMG = {
  lead: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783358136/download_24_hcsvht.jpg',
  agent:
    'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783358139/original_90e9d2ebbaa6cdb34e9badbc4870e41c_gif_500_495_nnynir.gif',
  claude: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783358137/Claude_ggdvax.jpg',
  database:
    'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783358136/A_database_is_an_organized_collection_of_data_that_enables_businesses_to_store_manage_and_retrieve_information_efficiently__It_s_ecdcox.jpg',
  crm: 'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783358137/Product_Return_Policy__The_Strategic_Guide_for_E-commerce_Websites_-_Netolink_slobp2.jpg',
  bell:
    'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783358136/Bell_simple_flat_icon_vector_illustration__Alarm_icon_vector_illustration_vthrj4.jpg',
  megaphone:
    'https://res.cloudinary.com/dz6kxumoo/image/upload/v1783358136/Megaphone_Icon_-_Free_PNG_SVG_486316_-_Noun_Project_y9qpjr.jpg',
}

type NodeProps = {
  x: number
  y: number
  w: number
  h: number
  icon?: string
  img?: string
  title: string
  sub?: string
  delay: number
}

function Node({ x, y, w, h, icon, img, title, sub, delay }: NodeProps) {
  return (
    <foreignObject x={x} y={y} width={w} height={h}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4, delay, ease: EASE }}
        className="flex h-full w-full items-center gap-2 rounded-xl border border-[#2b2b2b] bg-[#121212] px-2 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.9)]"
      >
        <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-md bg-white">
          {img ? (
            <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover" />
          ) : (
            <CategoryIcon name={icon ?? 'branch'} width={16} height={16} className="text-[#7aa2ff]" />
          )}
        </span>
        <span className="min-w-0 leading-tight">
          <span className="block truncate text-[11px] font-semibold text-neutral-100">{title}</span>
          {sub && <span className="block truncate font-mono text-[9px] text-neutral-400">{sub}</span>}
        </span>
      </motion.div>
    </foreignObject>
  )
}

// Solid connector: faint base + accent draw-in + looping pulse.
function Flow({ d, drawDelay, pulseDelay }: { d: string; drawDelay: number; pulseDelay: number }) {
  return (
    <g fill="none">
      <path d={d} stroke="#2b2b2b" strokeWidth={1.6} />
      <motion.path
        d={d}
        stroke="#5B8DEF"
        strokeWidth={1.8}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, delay: drawDelay, ease: EASE }}
      />
      <motion.path
        d={d}
        stroke="#bcd4ff"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeDasharray="7 240"
        initial={{ strokeDashoffset: 247 }}
        animate={{ strokeDashoffset: [247, 0] }}
        transition={{ duration: 1.5, ease: 'linear', repeat: Infinity, repeatDelay: 1.1, delay: pulseDelay }}
      />
    </g>
  )
}

// Dashed sub-connector (model / memory / tools) — just fades in.
function SubLink({ d, delay }: { d: string; delay: number }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="#3a3a3a"
      strokeWidth={1.3}
      strokeDasharray="3 5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.9 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay }}
    />
  )
}

export function WorkflowDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#1f1f1f] bg-black">
      <div className="flex items-center justify-between px-5 pt-4">
        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-neutral-500">
          Under the hood · automation graph
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2b2b2b] px-2.5 py-1 font-mono text-2xs font-medium text-neutral-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Running
        </span>
      </div>

      <svg viewBox="0 84 760 300" preserveAspectRatio="xMidYMid meet" className="block w-full">
        <defs>
          <pattern id="wf-dots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.1" fill="#1c1c1c" />
          </pattern>
        </defs>
        <rect y="60" width="760" height="360" fill="url(#wf-dots)" />

        {/* Sub-links from AI Agent to model / memory / tools */}
        <SubLink d="M324 238 C282 270 204 288 204 312" delay={0.55} />
        <SubLink d="M324 238 C324 272 324 292 324 312" delay={0.6} />
        <SubLink d="M324 238 C366 270 444 288 444 312" delay={0.65} />

        {/* Main flow */}
        <Flow d="M160 200 C210 200 226 200 248 200" drawDelay={0.15} pulseDelay={1.8} />
        <Flow d="M400 200 C435 200 445 200 470 200" drawDelay={0.9} pulseDelay={2.3} />
        <Flow d="M586 200 C610 200 624 160 624 136" drawDelay={1.35} pulseDelay={2.8} />
        <Flow d="M586 200 C610 200 624 240 624 276" drawDelay={1.35} pulseDelay={2.8} />

        {/* Nodes */}
        <Node x={24} y={172} w={136} h={56} img={IMG.lead} title="On new lead" sub="Form / call" delay={0.05} />
        <Node x={248} y={162} w={152} h={76} img={IMG.agent} title="AI Agent" sub="Analyze + decide" delay={0.35} />
        <Node x={148} y={312} w={112} h={44} img={IMG.claude} title="Claude" delay={0.6} />
        <Node x={268} y={312} w={112} h={44} img={IMG.database} title="Memory" delay={0.65} />
        <Node x={388} y={312} w={112} h={44} img={IMG.crm} title="CRM" delay={0.7} />
        <Node x={470} y={172} w={116} h={56} icon="branch" title="Qualified?" delay={0.95} />
        <Node x={624} y={112} w={124} h={48} img={IMG.bell} title="Notify sales" sub="Slack" delay={1.35} />
        <Node x={624} y={252} w={124} h={48} img={IMG.megaphone} title="Nurture" sub="Drip" delay={1.35} />
      </svg>
    </div>
  )
}
