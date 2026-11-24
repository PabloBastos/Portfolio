import {
  SiOpenjdk, SiSpringboot, SiSpringsecurity, SiNodedotjs, SiPython,
  SiMysql, SiPostgresql,
  SiHtml5, SiCss, SiJavascript, SiReact,
  SiGit, SiGithub, SiDocker, SiN8N,
} from 'react-icons/si'
import { TbApi, TbSql } from 'react-icons/tb'

// Nome da tecnologia (como aparece em data.js) -> ícone.
// Para adicionar uma tecnologia nova, importe o ícone e inclua aqui.
// Tecnologias sem ícone aparecem só com o texto.
export const skillIcons = {
  'Java': SiOpenjdk,
  'Spring Boot': SiSpringboot,
  'Spring Security': SiSpringsecurity,
  'Node.js': SiNodedotjs,
  'Python': SiPython,
  'APIs REST': TbApi,
  'MySQL': SiMysql,
  'PostgreSQL': SiPostgresql,
  'SQL': TbSql,
  'HTML': SiHtml5,
  'CSS': SiCss,
  'JavaScript': SiJavascript,
  'React': SiReact,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Docker': SiDocker,
  'n8n': SiN8N,
}
