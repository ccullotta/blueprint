/*
 * Copyright 2022 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import memoize from "lodash/memoize";

/**
 * Gets the users current time zone, for example "Europe/Oslo".
 * This is currently backed by the browser or computer's locale setting.
 */
export const getCurrentTimezone: () => string = memoize(guessTimezone);

/**
 * Unsupported in IE, which newer Blueprint components do not support.
 * In the unlikely case that the browser API returns undefined, we default to UTC.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
 */
function guessTimezone(): string {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? "Etc/UTC";
}
