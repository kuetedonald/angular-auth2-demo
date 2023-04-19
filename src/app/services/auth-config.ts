import { UserManagerSettings } from 'oidc-client';
import { environment } from '../../environments/environment';

export function getClientSettings(): UserManagerSettings {
    return {
        authority: environment.authority,
        client_id: environment.client_id,
        redirect_uri: environment.redirect_uri,
        post_logout_redirect_uri: environment.post_logout_redirect_uri,
        response_type: environment.response_type,
        scope: environment.scopes,
        client_secret: environment.client_secret,
        filterProtocolClaims: true,
        loadUserInfo: true
    };
}
