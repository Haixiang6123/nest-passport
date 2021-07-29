import {Injectable} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";

@Injectable()
export class CookieAuthGuard extends AuthGuard('cookie') {}
