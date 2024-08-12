<template>
    <img src="@/assets/images/logo_white.png" alt="" class="logo_s" @click="Favorites(0)">
    <ul class="main_menu2 type2">
        <li>
            <i class="xi-apps" @click="fullBtn"></i>
        </li>
        <li>
            <i class="xi-folder-open" @click="sidFn"></i>
            <ul class="sub_menu" :class="{active:sidBtn}">
                <li>
                    <select name="" id="">
                        <option value="">PDF</option>
                        <option value="">BDW</option>
                        <option value="">NIS</option>
                        <option value="">HCT</option>
                        <option value="">GTL</option>
                    </select>
                </li>
                <li>
                    <select name="" id="">
                        <option value="">PFD</option>
                        <option value="">SYSTEM DB</option>
                    </select>
                </li>
            </ul>
        </li>
        <li>
            <i class="xi-calendar"></i>
        </li>
        <li>
            <i class="xi-search"></i>
        </li>
    </ul>
    <ul class="main_menu2">
        <li>
            <i class="xi-layout-snb-o" v-if="favorites.includes('dashboard')"></i>
        </li>
        <li>
            <i class="xi-clock-o" v-if="favorites.includes('timeline')"></i>
        </li>
        <li>
            <i class="xi-globus" v-if="favorites.includes('operation')"></i>
        </li>
        <li>
            <i class="xi-eye" v-if="favorites.includes('search')"></i>
        </li>
        <li>
            <i class="xi-document" v-if="favorites.includes('report')"></i>
        </li>
        <li>
            <i class="xi-lock" v-if="favorites.includes('alert')"></i>
        </li>
        <li>
            <i class="xi-trash" v-if="favorites.includes('config')"></i>
        </li>
        <li>
            <i class="xi-user" v-if="favorites.includes('user')"></i>
        </li>
        <li>
            <i class="xi-cog"></i>
        </li>
    </ul>
    <div class="full_menu" v-if="fullMenu">
        <ul class="depth1">
            <li>
                <strong>DASHBOARD 
                    <i class="xi-star" @click="toggleFavorite('dashboard')" v-if="favorites.includes('dashboard')"></i>
                    <i class="xi-star-o" @click="toggleFavorite('dashboard')" v-else></i>
                </strong>
            </li>
            <li>
                <strong>TIMELINE 
                    <i class="xi-star" @click="toggleFavorite('timeline')" v-if="favorites.includes('timeline')"></i>
                    <i class="xi-star-o" @click="toggleFavorite('timeline')" v-else></i>
                </strong>
            </li>
            <li>
                <strong>OPERATION 
                    <i class="xi-star" @click="toggleFavorite('operation')" v-if="favorites.includes('operation')"></i>
                    <i class="xi-star-o" @click="toggleFavorite('operation')" v-else></i>
                </strong>
                <ul class="depth2">
                    <li>Parameters
                        <ul class="depth3">
                            <li>Current Setting</li>
                            <li>Change History</li>
                            <li>Recommendations</li>
                        </ul>
                    </li>
                    <li>Collect Dump</li>
                    <li>Server Log</li>
                </ul>
            </li>
            <li>
                <strong>SEARCH 
                    <i class="xi-star" @click="toggleFavorite('search')" v-if="favorites.includes('search')"></i>
                    <i class="xi-star-o" @click="toggleFavorite('search')" v-else></i>
                </strong>
                <ul class="depth2">
                    <li>Expensive SQL</li>
                    <li>Blocked Transcation</li>
                    <li>Out of Memory(OOM)</li>
                    <li>CS table</li>
                    <li>CS Unload</li>
                    <li>DB Backup Status</li>
                    <li>Delta Merge</li>
                    <li>Savepoint</li>
                    <li>Garbage Collection</li>
                    <li>Replication Status</li>
                    <li>Background job</li>
                </ul>
            </li>
            <li>
                <strong>REPORT 
                    <i class="xi-star" @click="toggleFavorite('report')" v-if="favorites.includes('report')"></i>
                    <i class="xi-star-o" @click="toggleFavorite('report')" v-else></i>
                </strong>
                <ul class="depth2">
                    <li>cReport</li>
                    <li>eReport</li>
                    <li>xReport</li>
                </ul>
            </li>
            <li>
                <strong>ALERT
                    <i class="xi-star" @click="toggleFavorite('alert')" v-if="favorites.includes('alert')"></i>
                    <i class="xi-star-o" @click="toggleFavorite('alert')" v-else></i>
                </strong>
                <ul class="depth2">
                    <li>Current Alert</li>
                    <li>Alert History</li>
                    <li>Sms Alert</li>
                </ul>
            </li>
            <li>
                <strong>CONFIG 
                    <i class="xi-star" @click="toggleFavorite('config')" v-if="favorites.includes('config')"></i>
                    <i class="xi-star-o" @click="toggleFavorite('config')" v-else></i>
                </strong>
                <ul class="depth2">
                    <li>Resources</li>
                    <li>Repository</li>
                    <li>Users</li>
                    <li>Site Settings</li>
                </ul>
            </li>
            <li>
                <strong>USER 
                    <i class="xi-star" @click="toggleFavorite('user')" v-if="favorites.includes('user')"></i>
                    <i class="xi-star-o" @click="toggleFavorite('user')" v-else></i>
                </strong>
                <ul class="depth2">
                    <li>Change Password</li>
                    <li>Edit Profile</li>
                    <li>Logout</li>
                </ul>
            </li>
        </ul>
        <button class="xi-close" @click="fullBtn"></button>
    </div>
</template>

<script>

export default {
    name: 'IconNode',
    data() {
        return {
            fullMenu: false,
            favorites: ['dashboard','timeline','operation','search','report','alert','config','user'],
            sidBtn: false
        }
    },
    methods: {
        toggleFavorite(item) {
            const index = this.favorites.indexOf(item);
            if (index > -1) {
                // 'dashboard'가 배열에 있으면 제거
                this.favorites.splice(index, 1);
            } else {
                // 'dashboard'가 배열에 없으면 추가
                this.favorites.push(item);
            }

        },
        fullBtn() {
            this.fullMenu = !this.fullMenu
        },
        sidFn() {
            this.sidBtn = !this.sidBtn
        }
    }
}
</script>

<style>

</style>