<script setup>
import { useBasicStore } from "../stores/basicStore";
import { ref } from "vue";

const store = useBasicStore();
</script>

<template>
  <div class="side-menu flex-lg-column me-lg-1 ms-lg-0">
    <!-- LOGO -->
    <div class="navbar-brand-box">
      <a href="index.html" class="logo logo-dark">
        <span class="logo-sm">
          <img src="../assets/images/logo.svg" alt="" height="30" />
        </span>
      </a>

      <a href="index.html" class="logo logo-light">
        <span class="logo-sm">
          <img src="../assets/images/logo.svg" alt="" height="30" />
        </span>
      </a>
    </div>
    <!-- end navbar-brand-box -->

    <!-- Start side-menu nav -->
    <div class="flex-lg-column my-auto">
      <ul
        class="nav nav-pills side-menu-nav justify-content-center"
        role="tablist"
      >
        <li
          class="nav-item"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Profile"
        >
          <a
            class="nav-link"
            :class="{ active: store.activeTab === 'profile' }"
            @click="store.openTab('profile')"
            id="pills-user-tab"
            data-bs-toggle="pill"
            href="#pills-user"
            role="tab"
          >
            <i
              ><svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fa-regular"
                data-icon="user"
                class="svg-inline--fa fa-user fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"
                  fill="currentColor"
                /></svg
            ></i>
          </a>
        </li>
        <li
          class="nav-item"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Chats"
        >
          <a
            class="nav-link"
            :class="{ active: store.activeTab === 'chat' }"
            @click="store.openTab('chat')"
            id="pills-chat-tab"
            data-bs-toggle="pill"
            href="#pills-chat"
            role="tab"
          >
            <i>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fa-regular"
                data-icon="message-lines"
                class="svg-inline--fa fa-message-lines fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M360 144h-208C138.8 144 128 154.8 128 168S138.8 192 152 192h208C373.3 192 384 181.3 384 168S373.3 144 360 144zM264 240h-112C138.8 240 128 250.8 128 264S138.8 288 152 288h112C277.3 288 288 277.3 288 264S277.3 240 264 240zM447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.836 11.02 15.55 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"
                  fill="currentColor"
                />
              </svg>
            </i>
          </a>
        </li>
        <li
          class="nav-item"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Groups"
        >
          <a
            class="nav-link"
            :class="{ active: store.activeTab === 'group' }"
            @click="store.openTab('group')"
            id="pills-groups-tab"
            data-bs-toggle="pill"
            href="#pills-groups"
            role="tab"
          >
            <i>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fa-regular"
                data-icon="users"
                class="svg-inline--fa fa-users fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM319.9 160c30.85 0 55.96 25.12 55.96 56S350.7 272 319.9 272S263.9 246.9 263.9 216S289 160 319.9 160zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM178.1 464c10.47-36.76 47.36-64 91.14-64H369.9c43.77 0 80.66 27.24 91.14 64H178.1zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160z"
                  fill="currentColor"
                />
              </svg>
            </i>
          </a>
        </li>
        <li
          class="nav-item"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Contacts"
        >
          <a
            class="nav-link"
            :class="{ active: store.activeTab === 'contact' }"
            @click="store.openTab('contact')"
            id="pills-contacts-tab"
            data-bs-toggle="pill"
            href="#pills-contacts"
            role="tab"
          >
            <i>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fa-regular"
                data-icon="address-book"
                class="svg-inline--fa fa-address-book fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M272 288h-64C163.8 288 128 323.8 128 368C128 376.8 135.2 384 144 384h192c8.836 0 16-7.164 16-16C352 323.8 316.2 288 272 288zM240 256c35.35 0 64-28.65 64-64s-28.65-64-64-64c-35.34 0-64 28.65-64 64S204.7 256 240 256zM496 320H480v96h16c8.836 0 16-7.164 16-16v-64C512 327.2 504.8 320 496 320zM496 64H480v96h16C504.8 160 512 152.8 512 144v-64C512 71.16 504.8 64 496 64zM496 192H480v96h16C504.8 288 512 280.8 512 272v-64C512 199.2 504.8 192 496 192zM384 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM400 448c0 8.836-7.164 16-16 16H96c-8.836 0-16-7.164-16-16V64c0-8.838 7.164-16 16-16h288c8.836 0 16 7.162 16 16V448z"
                  fill="currentColor"
                />
              </svg>
            </i>
          </a>
        </li>
        <li
          class="nav-item"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Settings"
        >
          <a
            class="nav-link"
            :class="{ active: store.activeTab === 'userSetting' }"
            @click="store.openTab('userSetting')"
            id="pills-setting-tab"
            data-bs-toggle="pill"
            href="#pills-setting"
            role="tab"
          >
            <i>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fa-regular"
                data-icon="user-gear"
                class="svg-inline--fa fa-user-gear fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  d="M610.5 373.3c2.625-14 2.625-28.5 0-42.5l25.75-15c3-1.625 4.375-5.125 3.375-8.5c-6.751-21.5-18.25-41.13-33.25-57.38c-2.25-2.5-6-3.125-9-1.375l-25.75 14.88c-10.88-9.25-23.37-16.5-36.88-21.25V212.3c0-3.375-2.5-6.375-5.75-7c-22.25-5-45-4.875-66.25 0c-3.25 .625-5.625 3.625-5.625 7v29.88c-13.5 4.75-26 12-36.88 21.25L394.4 248.5c-2.875-1.75-6.625-1.125-9 1.375c-15 16.25-26.5 35.88-33.13 57.38c-1 3.375 .3748 6.875 3.25 8.5l25.75 15c-2.5 14-2.5 28.5 0 42.5l-25.75 15c-3 1.625-4.25 5.125-3.25 8.5c6.626 21.5 18.12 41 33.13 57.38c2.375 2.5 6 3.125 9 1.375l25.88-14.88c10.88 9.25 23.37 16.5 36.88 21.25v29.88c0 3.375 2.375 6.375 5.625 7c22.38 5 45 4.875 66.25 0c3.25-.625 5.75-3.625 5.75-7v-29.88c13.5-4.75 26-12 36.88-21.25l25.75 14.88c2.875 1.75 6.75 1.125 9-1.375c15-16.25 26.5-35.88 33.25-57.38c1-3.375-.3749-6.875-3.375-8.5L610.5 373.3zM496 400.5c-26.75 0-48.5-21.75-48.5-48.5s21.75-48.5 48.5-48.5S544.5 325.3 544.5 352S522.8 400.5 496 400.5zM425.1 491.8c0 6.148 1.867 11.77 4.433 17.01C425.4 510.7 420.9 512 416 512H32C14.33 512 0 497.7 0 480c0-97.2 78.8-176 176-176h95.1c16.68 0 32.78 2.473 48.07 6.811c.4258 13.5 7.556 25.94 19.68 32.8l7.655 4.461c-.0684 2.619-.0684 5.24 0 7.859l-8.018 4.669c-3.125 1.689-5.664 4.06-8.111 6.507C313.5 357.7 293.5 352 272 352H176c-65.17 0-119.1 48.95-127 112h303.2c3.102 3.998 6.18 8.001 9.604 11.74c7.842 8.26 18.25 12.75 28.97 12.75c6.917 0 13.75-1.85 19.75-5.352l7.818-4.493c2.237 1.371 4.506 2.68 6.809 3.93V491.8zM224 256c70.7 0 128-57.31 128-128c0-70.69-57.3-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48C268.1 48 304 83.89 304 128c0 44.11-35.89 80-80.01 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"
                  fill="currentColor"
                />
              </svg>
            </i>
          </a>
        </li>
        <li
          class="nav-item dropdown profile-user-dropdown d-inline-block d-lg-none"
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="../assets/images/users/avatar-1.jpg"
              alt=""
              class="profile-user rounded-circle"
            />
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#"
              >Profile <i class="ri-profile-line float-end text-muted"></i
            ></a>
            <a class="dropdown-item" href="#"
              >Setting <i class="ri-settings-3-line float-end text-muted"></i
            ></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"
              >Log out
              <i class="ri-logout-circle-r-line float-end text-muted"></i
            ></a>
          </div>
        </li>
      </ul>
    </div>
    <!-- end side-menu nav -->

    <div class="flex-lg-column d-none d-lg-block">
      <ul class="nav side-menu-nav justify-content-center">
        <li class="nav-item">
          <a
            class="nav-link light-dark-mode"
            href="#"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="right"
            title="Dark / Light Mode"
          >
            <i>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fa-regular"
                data-icon="brightness"
                class="svg-inline--fa fa-brightness fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M488 232h-64c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24h64C501.3 280 512 269.3 512 256C512 242.7 501.3 232 488 232zM112 256c0-13.26-10.75-24-24-24h-64C10.75 232 0 242.7 0 256c0 13.25 10.75 24 24 24h64C101.3 280 112 269.3 112 256zM391.8 357.8c-9.371-9.371-24.57-9.371-33.94 .0023s-9.368 24.57 .0047 33.94l45.25 45.26c9.371 9.371 24.57 9.37 33.95-.0016c9.373-9.373 9.366-24.57-.0047-33.94L391.8 357.8zM120.2 154.2c9.371 9.373 24.57 9.371 33.94-.0016c9.375-9.373 9.368-24.57-.0047-33.94L108.9 74.98C99.55 65.61 84.35 65.61 74.98 74.98C65.6 84.35 65.61 99.55 74.98 108.9L120.2 154.2zM120.2 357.8l-45.26 45.26c-9.371 9.371-9.376 24.57-.0047 33.94c9.373 9.373 24.57 9.373 33.95 .0016l45.25-45.26c9.373-9.371 9.38-24.57 .0047-33.94C144.8 348.5 129.6 348.5 120.2 357.8zM391.8 154.2l45.26-45.25c9.371-9.373 9.378-24.57 .0047-33.94s-24.58-9.375-33.95-.0016l-45.25 45.25c-9.373 9.373-9.378 24.57-.0047 33.94C367.2 163.5 382.4 163.5 391.8 154.2zM256 400c-13.25 0-24 10.75-24 24v64C232 501.3 242.7 512 256 512c13.26 0 24-10.75 24-24v-64C280 410.7 269.3 400 256 400zM256 112c13.26 0 24-10.75 24-24v-64C280 10.75 269.3 0 256 0C242.7 0 232 10.75 232 24v64C232 101.3 242.7 112 256 112zM256 160C202.1 160 160 202.1 160 256c0 53.02 42.98 96 96 96s96-42.98 96-96C352 202.1 309 160 256 160zM256 304C229.5 304 208 282.5 208 256S229.5 208 256 208s48 21.53 48 48S282.5 304 256 304z"
                  fill="currentColor"
                />
              </svg>
            </i>
          </a>
        </li>

        <li class="nav-item btn-group dropup profile-user-dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              src="../assets/images/users/avatar-1.jpg"
              alt=""
              class="profile-user rounded-circle"
            />
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#"
              >Profile <i class="ri-profile-line float-end text-muted"></i
            ></a>
            <a class="dropdown-item" href="#"
              >Setting <i class="ri-settings-3-line float-end text-muted"></i
            ></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="auth-login.html"
              >Log out
              <i class="ri-logout-circle-r-line float-end text-muted"></i
            ></a>
          </div>
        </li>
      </ul>
    </div>
    <!-- Side menu user -->
  </div>
</template>
