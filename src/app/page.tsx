import { Suspense } from "react";

import { GithubProfile } from "@/components/github-profile";
import { LongWaitComponent } from "@/components/long-wait-component";

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <Suspense fallback={<p>Carregando Long Component...</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando Github Profile...</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
