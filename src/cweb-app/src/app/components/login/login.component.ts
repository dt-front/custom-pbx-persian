import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.states';
import { LogIn } from '../../store/auth/auth.actions';
import {UserService} from '../../services/user.service';
import {Iuser} from '../../store/auth/auth.reducers';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
routes: any[] = [

  {path: 'dashboard',
     },
  {path: 'settings',
     },
  {
    path: 'directory/domains',
  },
  {
    path: 'directory/users',
  },
  {
    path: 'directory/groups',
  },
  {
    path: 'directory/gateways',
  },
  {
    path: 'configuration/modules',
  },
  {
    path: 'configuration/acl',
  },
  {
    path: 'configuration/callcenter',
  },
  {
    path: 'configuration/sofia',
  },
  {
    path: 'configuration/verto',
  },
  {
    path: 'configuration/cdr-pg-csv',
    // 'configuration/cdr-pg-csv',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigCdrPgCsvDataService}
  },
  {
    path: 'configuration/odbc-cdr',
    // 'configuration/odbc-cdr',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigOdbcCdrDataService}
  },
  {
    path: 'configuration/lcr',
    // 'configuration/lcr',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigLcrDataService}
  },
  {
    path: 'configuration/shout',//done
    // 'configuration/shout',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigShoutDataService}
  },
  {
    path: 'configuration/redis',
    // 'configuration/redis',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigRedisDataService}
  },
  {
    path: 'configuration/nibblebill',
    // 'configuration/nibblebill',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigNibblebillDataService}
  },
  {
    path: 'configuration/avmd',
    // 'configuration/avmd',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigAvmdDataService}
  },
  {
    path: 'configuration/cdr-mongodb',
    // 'configuration/cdr-mongodb',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigCdrMongodbDataService}
  },
  {
    path: 'configuration/db',
    // 'configuration/db',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigDbDataService}
  },
  {
    path: 'configuration/http-cache',
    // 'configuration/http-cache',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigHttpCacheDataService}
  },
  {
    path: 'configuration/memcache',
    // 'configuration/memcache',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigMemcacheDataService}
  },
  {
    path: 'configuration/opus',
    // 'configuration/opus',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigOpusDataService}
  },
  {
    path: 'configuration/python',
    // 'configuration/python',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigPythonDataService}
  },
  {
    path: 'configuration/tts-commandline',
    // 'configuration/tts-commandline',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigTtsCommandlineDataService}
  },
  {
    path: 'configuration/alsa',
    // 'configuration/alsa',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigAlsaDataService}
  },
  {
    path: 'configuration/amr',
    // 'configuration/amr',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigAmrDataService}
  },
  {
    path: 'configuration/amrwb',
    // 'configuration/amrwb',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigAmrwbDataService}
  },
  {
    path: 'configuration/cepstral',
    // 'configuration/cepstral',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigCepstralDataService}
  },
  {
    path: 'configuration/cidlookup',
    // 'configuration/cidlookup',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigCidlookupDataService}
  },
  {
    path: 'configuration/curl',
    // 'configuration/curl',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigCurlDataService}
  },
  {
    path: 'configuration/dialplan-directory',
    // 'configuration/dialplan-directory',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigDialplanDirectoryDataService}
  },
  {
    path: 'configuration/easyroute',
    // 'configuration/easyroute',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigEasyrouteDataService}
  },
  {
    path: 'configuration/erlang-event',
    // 'configuration/erlang-event',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigErlangEventDataService}
  },
  {
    path: 'configuration/event-multicast',
    // 'configuration/event-multicast',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigEventMulticastDataService}
  },
  {
    path: 'configuration/fax',
    // 'configuration/fax',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigFaxDataService}
  },
  {
    path: 'configuration/lua',
    // 'configuration/lua',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigLuaDataService}
  },
  {
    path: 'configuration/mongo',
    // 'configuration/mongo',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigMongoDataService}
  },
  {
    path: 'configuration/msrp',
    // 'configuration/msrp',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigMsrpDataService}
  },
  {
    path: 'configuration/oreka',
    // 'configuration/oreka',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigOrekaDataService}
  },
  {
    path: 'configuration/perl',
    // 'configuration/perl',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigPerlDataService}
  },
  {
    path: 'configuration/pocketsphinx',
    // 'configuration/pocketsphinx',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigPocketsphinxDataService}
  },
  {
    path: 'configuration/sangoma-codec',
    // 'configuration/sangoma-codec',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigSangomaCodecDataService}
  },
  {
    path: 'configuration/sndfile',
    // 'configuration/sndfile',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigSndfileDataService}
  },
  {
    path: 'configuration/xml-cdr',
    // 'configuration/xml-cdr',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigXmlCdrDataService}
  },
  {
    path: 'configuration/xml-rpc',
    // 'configuration/xml-rpc',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigXmlRpcDataService}
  },
  {
    path: 'configuration/zeroconf',
    // 'configuration/zeroconf',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigZeroconfDataService}
  },
  {
    path: 'configuration/post-load-switch',
    // 'configuration/post-load-switch',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigPostSwitchDataService}
  },
  {
    path: 'configuration/distributor',
    // 'configuration/distributor',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigDistributorDataService}
  },
  {
    path: 'configuration/directory',
    // 'configuration/directory',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigDirectoryDataService}
  },
  {
    path: 'configuration/fifo',
    // 'configuration/fifo',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigFifoDataService}
  },
  {
    path: 'configuration/opal',
    // 'configuration/opal',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigOpalDataService}
  },
  {
    path: 'configuration/osp',
    // 'configuration/osp',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigOspDataService}
  },
  {
    path: 'configuration/unicall',
    // 'configuration/unicall',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigUnicallDataService}
  },

  {
    path: 'dialplan/contexts',
    // 'dialplan/contexts',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetDialplanContextsDataService}
  },
  {
    path: 'monitoring/users-panel',
    // 'monitoring/users-panel',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetDirectoryUsersDataWithSubscriptionService}
  },
  {
    path: 'configuration/conference',
    // 'configuration/conference',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetConfigConferenceDataService}
  },
  {
    path: 'instances',
    // 'instances',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetInstancesDataService}
  },
  {
    path: 'global-variables',
    // 'global-variables',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetGlobalVariablesDataService}
  },
  {
    path: 'configuration/post-load-modules',
    // 'configuration/post-load-modules',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetPostLoadModulesDataService}
  },
  {
    path: 'configuration/voicemail',
    // 'configuration/voicemail',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetVoicemailDataService}
  },
  {path: 'cdr',
    // 'cdr', // LazyWrapperComponent, 
    // canActivate: [AuthGuard], 
    // {reconnectUpdater: UnsubscribeService}
    },
  {path: 'logs',
    // 'logs', // LazyWrapperComponent, 
    // canActivate: [AuthGuard], 
    // {reconnectUpdater: UnsubscribeService}
    },
  {path: 'fs-cli',
    // 'fs-cli', // LazyWrapperComponent,
     // canActivate: [AuthGuard],
      // {reconnectUpdater: UnsubscribeService}
      },
  {path: 'hep',
    // 'hep', // LazyWrapperComponent, 
    // canActivate: [AuthGuard], 
    // {reconnectUpdater: UnsubscribeService}
    },
  {
    path: 'apps/autodialer',
    // 'apps/autodialer',
    // LazyWrapperComponent,
    // canActivate: [AuthGuard],
    // {reconnectUpdater: GetAutodialerDataService
    
  }
];



  user: Iuser = {};

  constructor(
    public userService: UserService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    const payload = {
      login: this.user.login,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }

}
