export const DASHBOARD_LOADED = 'dashboard/loaded'
export const loadDashboard = dispatch => {
    fetch('/api/dashboard')
      .then(res => res.json())
        .then(dashboard => dispatch({
            type: DASHBOARD_LOADED,
            payload: dashboard
        }))
}