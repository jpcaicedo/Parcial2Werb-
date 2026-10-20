import { ConflictException, Injectable, NotImplementedException } from '@nestjs/common';
import { ReservationEntity } from './entities/reservation.entity';

@Injectable()
export class ReservationRulesService {
  ensureCanCancel(reservation: ReservationEntity): void {
    if (reservation.status === 'cancelled') {
    throw new ConflictException('Reserva ha sido cancelada');
  }
  }
}
