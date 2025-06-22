import http from "k6/http";
import { check } from "k6";

export const options = {
    vus: 100,
    duration: "1m",
    thresholds: {
        http_req_failed: ["rate < 0.05"],
    },
};

export default function () {
    const BASE_URL = "https://serverest.dev/usuarios";

    const res = http.get(BASE_URL);

    check(res, {
        "status code 200": (r) => r.status === 200,
    });
}
