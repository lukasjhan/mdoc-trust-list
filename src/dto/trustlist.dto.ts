import { ApiProperty } from '@nestjs/swagger';

export class TrustListCertDto {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  cert: string;
}

export class TrustListDto {
  @ApiProperty({ type: [TrustListCertDto] })
  certs: TrustListCertDto[];
}
