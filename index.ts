import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { extend } from '@syncfusion/ej2-base';
import {
  Schedule,
  Day,
  Week,
  WorkWeek,
  Month,
  TimelineViews,
  TimelineMonth,
  EventRenderedArgs,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-schedule';
import * as dataSource from './datasource.json';
import { applyCategoryColor } from './helper';

Schedule.Inject(
  Day,
  Week,
  WorkWeek,
  Month,
  TimelineViews,
  TimelineMonth,
  Resize,
  DragAndDrop
);

/**
 * Schedule cell dimension sample
 */

let data: Object[] = <Object[]>(
  extend([], (dataSource as any).employeeEventData, null, true)
);
function OnActionBegin(args) {
  console.log('In OnActionBegin type=' + args.requestType);
}
let scheduleObj: Schedule = new Schedule({
  width: '100%',
  height: '650px',
  views: ['Day', 'Week', 'WorkWeek', 'Month', 'TimelineWeek', 'TimelineMonth'],
  selectedDate: new Date(2021, 1, 15),
  cssClass: 'schedule-cell-dimension',
  showTimeIndicator: false,
  actionBegin: OnActionBegin,
  eventSettings: {
    dataSource: data,
    editFollowingEvents: true,
    fields: {
      subject: { title: 'Event Name', name: 'Subject', default: '' },
    },
  },
  eventRendered: (args: EventRenderedArgs) =>
    applyCategoryColor(args, scheduleObj.currentView),
});
scheduleObj.appendTo('#Schedule');
