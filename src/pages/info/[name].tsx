import type { GetStaticProps, GetStaticPaths } from 'next';
import { marked } from 'marked';
import React from 'react'
import path from 'path';
import fs from "node:fs/promises"
// import testInfo from '../../public/testInfo/testInfo1.md';

interface TestInfoPageProps {
  html: string
}

type TestInfoPageParams = {
  name: string
}

function TestInfoPage({ html }: TestInfoPageProps) {
  return (
    <div className='contents' dangerouslySetInnerHTML={{ __html: html }}/>
  )  
}

export const getStaticProps: GetStaticProps<TestInfoPageProps, TestInfoPageParams> = async ({ params }) => {
    const testInfo = await fs.readFile(path.resolve(`./public/testInfo/${params?.name}.md`), { encoding: 'utf-8' })
    return {
      props:{
        html: marked(testInfo)
      }
    } 
}

export const getStaticPaths: GetStaticPaths<TestInfoPageParams> = async function (){
    const fileList = await fs.readdir(path.resolve('./public/testInfo'))
    
    const paths = fileList.map(rawName => ({
      params: { name: rawName.replace('.md', '') }
    }))

    return { paths, fallback: false }
}

export default TestInfoPage;
