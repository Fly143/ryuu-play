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

export class Budew_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Poison Enzyme", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, including damage, done to Budew by your opponent's Poisoned Pokémon.", useWhenInPlay: true },
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Roselia from your hand onto Budew (this counts as evolving Budew) and remove all damage counters from Budew.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Buddy-buddy", cost: [], damage: "", text: "Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "PL";
  public name: string = "Budew";
  public fullName: string = "Budew PL 33";
  public text: string = "Budew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
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
