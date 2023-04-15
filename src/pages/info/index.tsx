import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import path from 'path';
import fs from "node:fs/promises"
import { marked } from 'marked';
import Link from 'next/link';

interface InfoPageProps {
    html:string,
}

type InfoPageParams = {
}

const InfoPage: NextPage<InfoPageProps> = ({ html }: InfoPageProps) => (
    <>
      <Link href="info/testInfo2">중졸검정고시</Link>
      <div className='contents p-4' dangerouslySetInnerHTML={{ __html: html }}/>
    </>

)

export const getStaticProps: GetStaticProps<InfoPageProps, InfoPageParams> = async () => {
    const testInfo = await fs.readFile(path.resolve(`./public/testInfo/testInfo1.md`), { encoding: 'utf-8' })
    return {
      props:{
        html: marked(testInfo)
      }
    } 
}

export default InfoPage;
