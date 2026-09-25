import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MewtwoVUNIONSWSH162 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 300;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Photon Barrier", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks from your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Union Gain", cost: [], damage: "", text: "Attach up to 2 Psychic Energy cards from your discard pile to this Pokémon." },
      { name: "Super Regeneration", cost: [], damage: "", text: "Heal 200 damage from this Pokémon." },
      { name: "Psysplosion", cost: [], damage: "", text: "Put 16 damage counters on your opponent's Pokémon in any way you like." },
      { name: "Final Burn", cost: [], damage: "300", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Mewtwo V-UNION";
  public fullName: string = "Mewtwo V-UNION PR-SW SWSH162";
  public text: string = "Mewtwo V-UNION";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 200);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[2]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 160);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
