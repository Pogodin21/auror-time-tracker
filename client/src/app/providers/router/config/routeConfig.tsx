import { TrackPage } from "@/pages/track-page";
import { TasksPage } from "@/pages/tasks-page";

interface IAppRoute {
  path: string;
  element: React.ReactNode;
}

export enum AppRoutes {
  TRACK = "track",
  TASKS = "tasks",
  PROJECTS = "projects"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.TRACK]: "/",
  [AppRoutes.TASKS]: '/tasks',
  [AppRoutes.PROJECTS]: '/projects',
};

export const routeConfig: IAppRoute[] = [
  { path: RoutePath.track, element: <TrackPage /> },
  { path: RoutePath.tasks, element: <TasksPage />},
  { path: RoutePath.projects, element:<div></div>}

];
