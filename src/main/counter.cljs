(ns counter
  (:require [reagent.dom :as rd]
            [re-frame.core :as rf]))

(rf/reg-event-db
 :counter-increment
 (fn [db _]
   (update db :counter inc)))

(rf/reg-sub
 :counter
 (fn [db _]
   (get db :counter 0)))

(defn counter-view
  []
  [:div
   [:button {:on-click #(rf/dispatch [:counter-increment])} "+"]
   [:h1 @(rf/subscribe [:counter])]])

(rd/render
 [counter-view]
 (js/document.getElementById "app"))