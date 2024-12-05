import React from "react";

import { Dock, DockIcon } from "./dock";
import { SiGeeksforgeeks, SiCodechef, SiCodeforces } from "react-icons/si";
import { FaEarlybirds } from "react-icons/fa";
export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="relative">
      <Dock magnification={65} distance={150}>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2">
          <a href="https://github.com/sumit-kumar19">
            <div className="group relative">
              <Icons.gitHub className="size-full" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 hidden group-hover:block text-black bg-zinc-300 dark:bg-slate-900 dark:text-white text-xs rounded py-1 px-2 ">
                github
              </span>
            </div>
          </a>
        </DockIcon>

        <DockIcon className="bg-black/10 dark:bg-white/10 p-1">
          <a href="https://leetcode.com/u/sumitkumar-/">
            <div className="group relative">
              <Icons.leetcode className="size-full" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 hidden group-hover:block text-black bg-zinc-300 dark:bg-slate-900 dark:text-white text-xs rounded py-1 px-2 ">
                LeetCode
              </span>
            </div>
          </a>
        </DockIcon>

        <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
          <a href="https://www.linkedin.com/in/sumitkumar0906/">
            <div className="group relative">
              <Icons.linkedin className="size-full" />

              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 hidden group-hover:block text-black bg-zinc-300 dark:bg-slate-900 dark:text-white text-xs rounded py-1 px-2 ">
                LinkedIn
              </span>
            </div>
          </a>
        </DockIcon>

        <DockIcon>
          <a href="https://codolio.com/profile/sum_it.">
            <div className="group relative">
              <Icons.Codoilo className="size-full" />

              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 hidden group-hover:block text-black bg-zinc-300 dark:bg-slate-900 dark:text-white text-xs rounded py-1 px-2 ">
                Codolio
              </span>
            </div>
          </a>
        </DockIcon>

        <DockIcon className="bg-black/10 dark:bg-white/10">
          <a href="https://www.codechef.com/users/sumit_kzx">
            <div className="group relative">
              <Icons.codeChef className="size-full" />

              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 hidden group-hover:block text-black bg-zinc-300 dark:bg-slate-900 dark:text-white text-xs rounded py-1 px-2 ">
                CodeChef
              </span>
            </div>
          </a>
        </DockIcon>

        <DockIcon className="bg-black/10 dark:bg-white/10 p-2">
          <a href="https://codeforces.com/profile/sumitKumar0">
            <div className="group relative">
              <Icons.codeforces className="size-full" />

              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 hidden group-hover:block text-black bg-zinc-300 dark:bg-slate-900 dark:text-white text-xs rounded py-1 px-2 ">
                Codeforces
              </span>
            </div>
          </a>
        </DockIcon>
        <DockIcon className="bg-black/10 dark:bg-white/10 p-2">
          <a href="https://www.geeksforgeeks.org/user/sumitkumar04/">
            <div className="group relative">
              <Icons.gfg className="size-full" />
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 hidden group-hover:block text-black bg-zinc-300 dark:bg-slate-900 dark:text-white text-xs rounded py-1 px-2 ">
                GeeksforGeeks
              </span>
            </div>
          </a>
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  gfg: (props: IconProps) => SiGeeksforgeeks({ ...props, size: 24 }),

  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  leetcode: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="leetcode"
      {...props}
    >
      <path
        fill="#B3B1B0"
        d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
      ></path>
      <path
        fill="#E7A41F"
        d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
      ></path>
      <path
        fill="#070706"
        d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"
      ></path>
    </svg>
  ),

  linkedin: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zm-13.08 20.16H5.35v-10h3.8v10zm-1.9-11.47c-1.21 0-2.2-.98-2.2-2.2s.99-2.2 2.2-2.2 2.2.98 2.2 2.2-.98 2.2-2.2 2.2zm13.08 11.47h-3.8v-5.43c0-1.3-.03-2.97-1.81-2.97-1.81 0-2.09 1.42-2.09 2.88v5.53h-3.8v-10h3.64v1.36h.05c.51-.95 1.75-1.94 3.61-1.94 3.87 0 4.59 2.54 4.59 5.85v5.73z"
        fill="#0288D1"
      />
    </svg>
  ),
  codeChef: (props: IconProps) => SiCodechef({ ...props, size: 32 }),
  codeforces: (props: IconProps) => SiCodeforces({ ...props, size: 24 }),
  Codoilo: (props: IconProps) => FaEarlybirds({ ...props, size: 28 }),
};
