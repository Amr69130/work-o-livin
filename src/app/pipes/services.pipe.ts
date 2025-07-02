@Pipe({
  name: 'status',
  standalone: true
})
// export class StatusPipe implements PipeTransform {
//
//   transform(value: STATUS):string{
//     switch (value) {
//       case STATUS.TODO:
//         return '📝 À faire';
//       case STATUS.IN_PROGRESS:
//         return '⚙️ En cours';
//       case STATUS.DONE:
//         return '✅ Terminé';
//       case STATUS.BUG:
//         return '🐞 Bug';
//       default:
//         return '❓ Inconnu';
//     }
//   }
//
// }
