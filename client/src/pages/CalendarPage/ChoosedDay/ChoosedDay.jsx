import { getYear, getMonth, parse } from 'date-fns';
import { useParams } from 'react-router-dom';
import { useGetTasksQuery } from 'store/tasks/tasksApi';
import Loader from 'components/shared/Loader/Loader';

import { useisRefreshing } from 'store/selectors';

import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import { ChoosedDayStyles } from './ChoosedDay.styled';

export default function ChoosedDay() {
  const isRefreshing = useisRefreshing();
  const { currentDate } = useParams();
  const year = getYear(parse(currentDate, 'yyyy-MM-dd', new Date()));
  const month = getMonth(parse(currentDate, 'yyyy-MM-dd', new Date())) + 1;
  const date = { year, month };
  const { data: tasks, isLoading, isFetching } = useGetTasksQuery(date);

  return (
    <ChoosedDayStyles>
      {!isLoading && !isRefreshing && Boolean(tasks) ? (
        <>
          <DayCalendarHead date={currentDate} tasks={tasks.tasks} />
          <TasksColumnsList tasks={tasks.tasks} />
        </>
      ) : (
        <Loader />
      )}
    </ChoosedDayStyles>
  );
}
