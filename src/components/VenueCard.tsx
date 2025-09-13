@@ .. @@
         </div>

-        <div className="space-y-4 mb-6">
-          <h4 className="text-base sm:text-lg text-white font-semibold flex items-center gap-2">
-            <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-pink-500" />
-            Features
-          </h4>
-          <ul className="space-y-2 sm:space-y-3">
-            {venue.features.slice(venue.name === 'Couple' ? 2 : 1).map((feature, index) => (
-              <li
-                key={index}
-                className="text-gray-400 text-sm sm:text-base flex items-start gap-3"
-              >
-                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full flex-shrink-0"></span>
-                <span className="leading-relaxed">{feature}</span>
-              </li>
-            ))}
-          </ul>
-        </div>
-
         <button